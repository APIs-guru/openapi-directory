import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReferenceDataSource } from "./referencedatasource";
/**
 * <p/>
**/
export declare class AddApplicationReferenceDataSourceRequest extends SpeakeasyBase {
    applicationName: string;
    currentApplicationVersionId: number;
    referenceDataSource: ReferenceDataSource;
}
