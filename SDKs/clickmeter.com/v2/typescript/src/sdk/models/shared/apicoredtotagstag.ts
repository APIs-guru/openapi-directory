import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoTagsTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datapoints, form, name=datapoints;" })
  datapoints?: number[];

  @SpeakeasyMetadata({ data: "json, name=groups, form, name=groups;" })
  groups?: number[];

  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;
}
