import { SpeakeasyBase } from "../../../internal/utils";
import { ContentModelsContentPreview } from "./contentmodelscontentpreview";
import { ContentModelsContentTypeProperty } from "./contentmodelscontenttypeproperty";
import { ContentModelsContentTypePropertySection } from "./contentmodelscontenttypepropertysection";
import { ContentModelsTagMetadataDefinition } from "./contentmodelstagmetadatadefinition";
import { ContentModelsTagMetadataItem } from "./contentmodelstagmetadataitem";
export declare class ContentModelsContentTypeDescription extends SpeakeasyBase {
    allowComments?: boolean;
    autoEnglishPropertyFallback?: boolean;
    bindIdentifierToProperty?: string;
    boundRegex?: string;
    bulkUploadable?: boolean;
    cType?: string;
    contentDescription?: string;
    forceIdentifierBinding?: boolean;
    name?: string;
    previewImage?: string;
    previews?: ContentModelsContentPreview[];
    priority?: number;
    properties?: ContentModelsContentTypeProperty[];
    propertySections?: ContentModelsContentTypePropertySection[];
    reminder?: string;
    showInContentEditor?: boolean;
    suppressCmsPath?: boolean;
    tagMetadata?: ContentModelsTagMetadataDefinition[];
    tagMetadataItems?: Map<string, ContentModelsTagMetadataItem>;
    typeOf?: string;
    usageExamples?: string[];
}
