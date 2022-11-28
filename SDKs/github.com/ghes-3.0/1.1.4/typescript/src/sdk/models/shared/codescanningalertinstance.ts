import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAlertClassificationEnum } from "./codescanningalertclassificationenum";
import { CodeScanningAlertLocation } from "./codescanningalertlocation";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";



export class CodeScanningAlertInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class CodeScanningAlertInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysis_key" })
  analysisKey?: string;

  @SpeakeasyMetadata({ data: "json, name=classifications" })
  classifications?: CodeScanningAlertClassificationEnum[];

  @SpeakeasyMetadata({ data: "json, name=commit_sha" })
  commitSha?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: CodeScanningAlertLocation;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: CodeScanningAlertInstanceMessage;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CodeScanningAlertStateEnum;
}
