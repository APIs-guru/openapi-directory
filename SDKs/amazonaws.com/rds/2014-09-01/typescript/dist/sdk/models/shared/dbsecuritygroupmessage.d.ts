import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroup } from "./dbsecuritygroup";
export declare class DbSecurityGroupMessage extends SpeakeasyBase {
    dbSecurityGroups?: DbSecurityGroup[];
    marker?: string;
}
