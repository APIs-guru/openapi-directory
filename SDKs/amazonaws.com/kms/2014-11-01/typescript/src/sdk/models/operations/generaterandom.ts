import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GenerateRandomXAmzTargetEnum {
    TrentServiceGenerateRandom = "TrentService.GenerateRandom"
}


export class GenerateRandomHeaders extends SpeakeasyBase {
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
  xAmzTarget: GenerateRandomXAmzTargetEnum;
}


export class GenerateRandomRequest extends SpeakeasyBase {
  @Metadata()
  headers: GenerateRandomHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GenerateRandomRequest;
}


export class GenerateRandomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customKeyStoreInvalidStateException?: any;

  @Metadata()
  customKeyStoreNotFoundException?: any;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  generateRandomResponse?: shared.GenerateRandomResponse;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  statusCode: number;
}
