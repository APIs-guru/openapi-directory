import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigSnmPv3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context_engine_id" })
  contextEngineId?: string;

  @SpeakeasyMetadata({ data: "json, name=engine_id" })
  engineId?: string;

  @SpeakeasyMetadata({ data: "json, name=usm_db" })
  usmDb?: string;

  @SpeakeasyMetadata({ data: "json, name=vacm_db" })
  vacmDb?: string;
}
