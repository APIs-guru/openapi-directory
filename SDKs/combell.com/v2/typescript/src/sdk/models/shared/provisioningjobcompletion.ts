import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProvisioningJobCompletion extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=resource_links" })
  resourceLinks?: string[];
}
