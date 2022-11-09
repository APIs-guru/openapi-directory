import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDimensionKeysXAmzTargetEnum {
    PerformanceInsightsv20180227DescribeDimensionKeys = "PerformanceInsightsv20180227.DescribeDimensionKeys"
}


export class DescribeDimensionKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeDimensionKeysXAmzTargetEnum;
}


export class DescribeDimensionKeysRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDimensionKeysHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDimensionKeysRequest;
}


export class DescribeDimensionKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDimensionKeysResponse?: shared.DescribeDimensionKeysResponse;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  statusCode: number;
}
