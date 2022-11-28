import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultClusterParameters } from "./defaultclusterparameters";



export class DescribeDefaultClusterParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultClusterParameters?: DefaultClusterParameters;
}
