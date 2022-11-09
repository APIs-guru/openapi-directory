import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribePatchGroupStateXAmzTargetEnum {
    AmazonSsmDescribePatchGroupState = "AmazonSSM.DescribePatchGroupState"
}


export class DescribePatchGroupStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePatchGroupStateXAmzTargetEnum;
}


export class DescribePatchGroupStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribePatchGroupStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePatchGroupStateRequest;
}


export class DescribePatchGroupStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePatchGroupStateResult?: shared.DescribePatchGroupStateResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
