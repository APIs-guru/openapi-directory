import { SpeakeasyBase } from "../../../internal/utils";
import { ContentModelsTagMetadataItem } from "./contentmodelstagmetadataitem";
export declare class ContentModelsTagMetadataDefinition extends SpeakeasyBase {
    datatype?: string;
    description?: string;
    isRequired?: boolean;
    items?: ContentModelsTagMetadataItem[];
    name?: string;
    order?: number;
}
