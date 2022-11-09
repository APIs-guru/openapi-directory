import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeScanningAlertClassificationEnum } from "./codescanningalertclassificationenum";
import { CodeScanningAlertLocation } from "./codescanningalertlocation";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";


export class CodeScanningAlertInstanceMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class CodeScanningAlertInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysis_key" })
  analysisKey?: string;

  @Metadata({ data: "json, name=classifications" })
  classifications?: CodeScanningAlertClassificationEnum[];

  @Metadata({ data: "json, name=commit_sha" })
  commitSha?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=location" })
  location?: CodeScanningAlertLocation;

  @Metadata({ data: "json, name=message" })
  message?: CodeScanningAlertInstanceMessage;

  @Metadata({ data: "json, name=ref" })
  ref?: string;

  @Metadata({ data: "json, name=state" })
  state?: CodeScanningAlertStateEnum;
}
