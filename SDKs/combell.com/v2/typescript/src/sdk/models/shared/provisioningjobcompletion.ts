import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProvisioningJobCompletion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_links" })
  resourceLinks?: string[];
}
