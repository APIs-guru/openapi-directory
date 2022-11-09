import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ImportKeyMaterialXAmzTargetEnum {
    TrentServiceImportKeyMaterial = "TrentService.ImportKeyMaterial"
}


export class ImportKeyMaterialHeaders extends SpeakeasyBase {
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
  xAmzTarget: ImportKeyMaterialXAmzTargetEnum;
}


export class ImportKeyMaterialRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportKeyMaterialHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportKeyMaterialRequest;
}


export class ImportKeyMaterialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  expiredImportTokenException?: any;

  @Metadata()
  importKeyMaterialResponse?: Map<string, any>;

  @Metadata()
  incorrectKeyMaterialException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidCiphertextException?: any;

  @Metadata()
  invalidImportTokenException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  kmsInvalidStateException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
