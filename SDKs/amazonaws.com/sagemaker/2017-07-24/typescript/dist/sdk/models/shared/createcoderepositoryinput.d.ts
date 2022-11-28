import { SpeakeasyBase } from "../../../internal/utils";
import { GitConfig } from "./gitconfig";
import { Tag } from "./tag";
export declare class CreateCodeRepositoryInput extends SpeakeasyBase {
    codeRepositoryName: string;
    gitConfig: GitConfig;
    tags?: Tag[];
}
