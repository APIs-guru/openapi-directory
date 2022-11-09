import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigSnmPv3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=context_engine_id" })
  contextEngineId?: string;

  @Metadata({ data: "json, name=engine_id" })
  engineId?: string;

  @Metadata({ data: "json, name=usm_db" })
  usmDb?: string;

  @Metadata({ data: "json, name=vacm_db" })
  vacmDb?: string;
}
