import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceDataSource } from "./referencedatasource";
export declare class AddApplicationReferenceDataSourceRequest extends SpeakeasyBase {
    applicationName: string;
    currentApplicationVersionId: number;
    referenceDataSource: ReferenceDataSource;
}
