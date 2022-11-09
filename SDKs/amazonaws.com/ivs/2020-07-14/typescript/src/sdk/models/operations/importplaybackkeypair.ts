import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportPlaybackKeyPairHeaders extends SpeakeasyBase {
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
}


export class ImportPlaybackKeyPairRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publicKeyMaterial" })
  publicKeyMaterial: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class ImportPlaybackKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportPlaybackKeyPairHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ImportPlaybackKeyPairRequestBody;
}


export class ImportPlaybackKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  importPlaybackKeyPairResponse?: shared.ImportPlaybackKeyPairResponse;

  @Metadata()
  pendingVerification?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
