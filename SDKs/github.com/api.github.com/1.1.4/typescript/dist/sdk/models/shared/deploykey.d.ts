import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An SSH key granting access to a single repository.
**/
export declare class DeployKey extends SpeakeasyBase {
    createdAt: string;
    id: number;
    key: string;
    readOnly: boolean;
    title: string;
    url: string;
    verified: boolean;
}
