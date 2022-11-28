import { SpeakeasyBase } from "../../../internal/utils";
import { Checksum } from "./checksum";
export declare class CreateAppPkg extends SpeakeasyBase {
    appPkgName: string;
    appPkgPath: string;
    appPkgVersion: string;
    appProvider?: string;
    checksum: Checksum;
    userDefinedData?: Map<string, any>;
}
