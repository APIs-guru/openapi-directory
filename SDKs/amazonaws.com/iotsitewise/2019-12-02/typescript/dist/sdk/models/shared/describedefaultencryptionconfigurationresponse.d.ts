import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
export declare class DescribeDefaultEncryptionConfigurationResponse extends SpeakeasyBase {
    configurationStatus: ConfigurationStatus;
    encryptionType: EncryptionTypeEnum;
    kmsKeyArn?: string;
}
