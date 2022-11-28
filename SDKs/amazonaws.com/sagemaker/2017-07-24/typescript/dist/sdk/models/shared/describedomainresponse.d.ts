import { SpeakeasyBase } from "../../../internal/utils";
import { AppNetworkAccessTypeEnum } from "./appnetworkaccesstypeenum";
import { AuthModeEnum } from "./authmodeenum";
import { UserSettings } from "./usersettings";
import { DomainStatusEnum } from "./domainstatusenum";
export declare class DescribeDomainResponse extends SpeakeasyBase {
    appNetworkAccessType?: AppNetworkAccessTypeEnum;
    authMode?: AuthModeEnum;
    creationTime?: Date;
    defaultUserSettings?: UserSettings;
    domainArn?: string;
    domainId?: string;
    domainName?: string;
    failureReason?: string;
    homeEfsFileSystemId?: string;
    homeEfsFileSystemKmsKeyId?: string;
    kmsKeyId?: string;
    lastModifiedTime?: Date;
    singleSignOnManagedApplicationInstanceId?: string;
    status?: DomainStatusEnum;
    subnetIds?: string[];
    url?: string;
    vpcId?: string;
}
