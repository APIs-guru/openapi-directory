import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    organizationModelHaljsons?: shared.OrganizationModelHaljson[];
    organizationModels?: shared.OrganizationModel[];
    statusCode: number;
}
