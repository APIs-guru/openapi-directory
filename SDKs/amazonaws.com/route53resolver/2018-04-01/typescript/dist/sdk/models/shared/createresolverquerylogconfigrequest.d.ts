import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateResolverQueryLogConfigRequest extends SpeakeasyBase {
    creatorRequestId: string;
    destinationArn: string;
    name: string;
    tags?: Tag[];
}
