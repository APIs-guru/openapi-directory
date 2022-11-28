import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value. A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
