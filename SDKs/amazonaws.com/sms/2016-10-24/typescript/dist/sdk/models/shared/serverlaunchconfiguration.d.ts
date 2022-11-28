import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Server } from "./server";
import { UserData } from "./userdata";
/**
 * Launch configuration for a server.
**/
export declare class ServerLaunchConfiguration extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    configureScript?: S3Location;
    configureScriptType?: ScriptTypeEnum;
    ec2KeyName?: string;
    iamInstanceProfileName?: string;
    instanceType?: string;
    logicalId?: string;
    securityGroup?: string;
    server?: Server;
    subnet?: string;
    userData?: UserData;
    vpc?: string;
}
