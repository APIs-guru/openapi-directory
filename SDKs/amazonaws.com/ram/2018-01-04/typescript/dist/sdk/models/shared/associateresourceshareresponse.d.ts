import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";
export declare class AssociateResourceShareResponse extends SpeakeasyBase {
    clientToken?: string;
    resourceShareAssociations?: ResourceShareAssociation[];
}
