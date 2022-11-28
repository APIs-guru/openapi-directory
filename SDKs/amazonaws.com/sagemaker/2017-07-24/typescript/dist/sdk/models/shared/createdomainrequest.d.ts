import { SpeakeasyBase } from "../../../internal/utils";
import { AppNetworkAccessTypeEnum } from "./appnetworkaccesstypeenum";
import { AuthModeEnum } from "./authmodeenum";
import { UserSettings } from "./usersettings";
import { Tag } from "./tag";
export declare class CreateDomainRequest extends SpeakeasyBase {
    appNetworkAccessType?: AppNetworkAccessTypeEnum;
    authMode: AuthModeEnum;
    defaultUserSettings: UserSettings;
    domainName: string;
    homeEfsFileSystemKmsKeyId?: string;
    kmsKeyId?: string;
    subnetIds: string[];
    tags?: Tag[];
    vpcId: string;
}
