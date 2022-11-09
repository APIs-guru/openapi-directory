import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrganizationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.OrganizationModelHaljson })
  organizationModelHaljsons?: shared.OrganizationModelHaljson[];

  @Metadata({ elemType: shared.OrganizationModel })
  organizationModels?: shared.OrganizationModel[];

  @Metadata()
  statusCode: number;
}
