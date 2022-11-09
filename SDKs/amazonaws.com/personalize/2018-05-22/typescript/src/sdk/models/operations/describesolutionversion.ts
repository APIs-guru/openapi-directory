import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeSolutionVersionXAmzTargetEnum {
    AmazonPersonalizeDescribeSolutionVersion = "AmazonPersonalize.DescribeSolutionVersion"
}


export class DescribeSolutionVersionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeSolutionVersionXAmzTargetEnum;
}


export class DescribeSolutionVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSolutionVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeSolutionVersionRequest;
}


export class DescribeSolutionVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSolutionVersionResponse?: shared.DescribeSolutionVersionResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
