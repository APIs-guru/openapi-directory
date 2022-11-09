import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";
export declare class DisassociateResourceShareResponse extends SpeakeasyBase {
    clientToken?: string;
    resourceShareAssociations?: ResourceShareAssociation[];
}
