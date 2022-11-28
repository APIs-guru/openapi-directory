import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrganizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.OrganizationModelHaljson })
  organizationModelHaljsons?: shared.OrganizationModelHaljson[];

  @SpeakeasyMetadata({ elemType: shared.OrganizationModel })
  organizationModels?: shared.OrganizationModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
