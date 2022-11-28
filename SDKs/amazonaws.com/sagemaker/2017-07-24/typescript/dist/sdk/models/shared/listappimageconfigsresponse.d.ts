import { SpeakeasyBase } from "../../../internal/utils";
import { AppImageConfigDetails } from "./appimageconfigdetails";
export declare class ListAppImageConfigsResponse extends SpeakeasyBase {
    appImageConfigs?: AppImageConfigDetails[];
    nextToken?: string;
}
