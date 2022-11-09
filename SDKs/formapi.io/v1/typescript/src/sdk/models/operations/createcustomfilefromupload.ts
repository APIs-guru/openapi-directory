import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomFileFromUploadCreateCustomFileData extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_id" })
  cacheId: string;
}


export class CreateCustomFileFromUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CreateCustomFileFromUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCustomFileFromUploadCreateCustomFileData;

  @Metadata()
  security: CreateCustomFileFromUploadSecurity;
}


export class CreateCustomFileFromUploadCreateCustomFileResponseCustomFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class CreateCustomFileFromUploadCreateCustomFileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_file" })
  customFile: CreateCustomFileFromUploadCreateCustomFileResponseCustomFile;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum;
}


export class CreateCustomFileFromUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  createCustomFileResponse?: CreateCustomFileFromUploadCreateCustomFileResponse;
}
