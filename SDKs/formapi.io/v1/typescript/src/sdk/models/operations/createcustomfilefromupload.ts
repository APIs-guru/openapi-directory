import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCustomFileFromUploadCreateCustomFileData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_id" })
  cacheId: string;
}


export class CreateCustomFileFromUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CreateCustomFileFromUploadCreateCustomFileResponseCustomFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class CreateCustomFileFromUploadCreateCustomFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_file" })
  customFile: CreateCustomFileFromUploadCreateCustomFileResponseCustomFile;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum;
}


export class CreateCustomFileFromUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateCustomFileFromUploadCreateCustomFileData;

  @SpeakeasyMetadata()
  security: CreateCustomFileFromUploadSecurity;
}


export class CreateCustomFileFromUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  createCustomFileResponse?: CreateCustomFileFromUploadCreateCustomFileResponse;
}
