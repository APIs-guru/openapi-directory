import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChecksSetSuitesPreferencesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks extends SpeakeasyBase {
  @Metadata({ data: "json, name=app_id" })
  appId: number;

  @Metadata({ data: "json, name=setting" })
  setting: boolean;
}


export class ChecksSetSuitesPreferencesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_trigger_checks", elemType: operations.ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks })
  autoTriggerChecks?: ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks[];
}


export class ChecksSetSuitesPreferencesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksSetSuitesPreferencesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ChecksSetSuitesPreferencesRequestBody;
}


export class ChecksSetSuitesPreferencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkSuitePreference?: shared.CheckSuitePreference;
}
