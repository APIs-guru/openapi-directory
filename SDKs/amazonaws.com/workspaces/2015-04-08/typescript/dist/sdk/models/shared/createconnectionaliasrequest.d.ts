import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateConnectionAliasRequest extends SpeakeasyBase {
    connectionString: string;
    tags?: Tag[];
}
