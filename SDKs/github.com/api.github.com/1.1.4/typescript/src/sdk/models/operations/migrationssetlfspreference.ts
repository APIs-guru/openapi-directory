import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsSetLfsPreferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum MigrationsSetLfsPreferenceRequestBodyUseLfsEnum {
    OptIn = "opt_in"
,    OptOut = "opt_out"
}


export class MigrationsSetLfsPreferenceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=use_lfs" })
  useLfs: MigrationsSetLfsPreferenceRequestBodyUseLfsEnum;
}


export class MigrationsSetLfsPreferenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsSetLfsPreferencePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: MigrationsSetLfsPreferenceRequestBody;
}


export class MigrationsSetLfsPreferenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  import?: shared.Import;

  @Metadata()
  validationError?: shared.ValidationError;
}
