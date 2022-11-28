import { SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAlertClassificationEnum } from "./codescanningalertclassificationenum";
import { CodeScanningAlertLocation } from "./codescanningalertlocation";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
export declare class CodeScanningAlertInstanceMessage extends SpeakeasyBase {
    text?: string;
}
export declare class CodeScanningAlertInstance extends SpeakeasyBase {
    analysisKey?: string;
    classifications?: CodeScanningAlertClassificationEnum[];
    commitSha?: string;
    environment?: string;
    htmlUrl?: string;
    location?: CodeScanningAlertLocation;
    message?: CodeScanningAlertInstanceMessage;
    ref?: string;
    state?: CodeScanningAlertStateEnum;
}
