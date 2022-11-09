import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UploadEntityDefinitionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUploadEntityDefinitions = "IotThingsGraphFrontEndService.UploadEntityDefinitions"
}


export class UploadEntityDefinitionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: UploadEntityDefinitionsXAmzTargetEnum;
}


export class UploadEntityDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UploadEntityDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UploadEntityDefinitionsRequest;
}


export class UploadEntityDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  uploadEntityDefinitionsResponse?: shared.UploadEntityDefinitionsResponse;
}
