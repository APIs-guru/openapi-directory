import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectName" })
  projectName: string;
}
