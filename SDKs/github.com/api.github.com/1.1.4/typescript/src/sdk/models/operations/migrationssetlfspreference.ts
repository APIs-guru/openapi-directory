import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsSetLfsPreferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum MigrationsSetLfsPreferenceRequestBodyUseLfsEnum {
    OptIn = "opt_in",
    OptOut = "opt_out"
}


export class MigrationsSetLfsPreferenceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=use_lfs" })
  useLfs: MigrationsSetLfsPreferenceRequestBodyUseLfsEnum;
}


export class MigrationsSetLfsPreferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsSetLfsPreferencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MigrationsSetLfsPreferenceRequestBody;
}


export class MigrationsSetLfsPreferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  import?: shared.Import;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
