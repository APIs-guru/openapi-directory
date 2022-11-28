import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";
export declare class AddApplicationReferenceDataSourceResponse extends SpeakeasyBase {
    applicationArn?: string;
    applicationVersionId?: number;
    referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
