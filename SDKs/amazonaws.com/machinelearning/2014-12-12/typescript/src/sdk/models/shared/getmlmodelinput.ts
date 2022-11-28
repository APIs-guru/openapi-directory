import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMlModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @SpeakeasyMetadata({ data: "json, name=Verbose" })
  verbose?: boolean;
}
