import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RowAccessPolicyReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=policyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;
}
