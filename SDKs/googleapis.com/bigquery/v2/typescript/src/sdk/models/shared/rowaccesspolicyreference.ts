import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RowAccessPolicyReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=policyId" })
  policyId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=tableId" })
  tableId?: string;
}
