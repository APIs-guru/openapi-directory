import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOpsItemXAmzTargetEnum {
    AmazonSsmGetOpsItem = "AmazonSSM.GetOpsItem"
}


export class GetOpsItemHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOpsItemXAmzTargetEnum;
}


export class GetOpsItemRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetOpsItemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOpsItemRequest;
}


export class GetOpsItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOpsItemResponse?: shared.GetOpsItemResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  opsItemNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
