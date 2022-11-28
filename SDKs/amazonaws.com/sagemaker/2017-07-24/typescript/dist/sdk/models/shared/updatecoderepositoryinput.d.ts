import { SpeakeasyBase } from "../../../internal/utils";
import { GitConfigForUpdate } from "./gitconfigforupdate";
export declare class UpdateCodeRepositoryInput extends SpeakeasyBase {
    codeRepositoryName: string;
    gitConfig?: GitConfigForUpdate;
}
