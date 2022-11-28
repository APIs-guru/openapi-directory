import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChecksSetSuitesPreferencesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_id" })
  appId: number;

  @SpeakeasyMetadata({ data: "json, name=setting" })
  setting: boolean;
}


export class ChecksSetSuitesPreferencesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_trigger_checks", elemType: ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks })
  autoTriggerChecks?: ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks[];
}


export class ChecksSetSuitesPreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksSetSuitesPreferencesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ChecksSetSuitesPreferencesRequestBody;
}


export class ChecksSetSuitesPreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkSuitePreference?: shared.CheckSuitePreference;
}
