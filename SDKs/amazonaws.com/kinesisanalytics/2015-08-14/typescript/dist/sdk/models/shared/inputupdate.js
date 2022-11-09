var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputParallelismUpdate } from "./inputparallelismupdate";
import { InputProcessingConfigurationUpdate } from "./inputprocessingconfigurationupdate";
import { InputSchemaUpdate } from "./inputschemaupdate";
import { KinesisFirehoseInputUpdate } from "./kinesisfirehoseinputupdate";
import { KinesisStreamsInputUpdate } from "./kinesisstreamsinputupdate";
// InputUpdate
/**
 * Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).
**/
var InputUpdate = /** @class */ (function (_super) {
    __extends(InputUpdate, _super);
    function InputUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=InputId" }),
        __metadata("design:type", String)
    ], InputUpdate.prototype, "inputId", void 0);
    __decorate([
        Metadata({ data: "json, name=InputParallelismUpdate" }),
        __metadata("design:type", InputParallelismUpdate)
    ], InputUpdate.prototype, "inputParallelismUpdate", void 0);
    __decorate([
        Metadata({ data: "json, name=InputProcessingConfigurationUpdate" }),
        __metadata("design:type", InputProcessingConfigurationUpdate)
    ], InputUpdate.prototype, "inputProcessingConfigurationUpdate", void 0);
    __decorate([
        Metadata({ data: "json, name=InputSchemaUpdate" }),
        __metadata("design:type", InputSchemaUpdate)
    ], InputUpdate.prototype, "inputSchemaUpdate", void 0);
    __decorate([
        Metadata({ data: "json, name=KinesisFirehoseInputUpdate" }),
        __metadata("design:type", KinesisFirehoseInputUpdate)
    ], InputUpdate.prototype, "kinesisFirehoseInputUpdate", void 0);
    __decorate([
        Metadata({ data: "json, name=KinesisStreamsInputUpdate" }),
        __metadata("design:type", KinesisStreamsInputUpdate)
    ], InputUpdate.prototype, "kinesisStreamsInputUpdate", void 0);
    __decorate([
        Metadata({ data: "json, name=NamePrefixUpdate" }),
        __metadata("design:type", String)
    ], InputUpdate.prototype, "namePrefixUpdate", void 0);
    return InputUpdate;
}(SpeakeasyBase));
export { InputUpdate };
