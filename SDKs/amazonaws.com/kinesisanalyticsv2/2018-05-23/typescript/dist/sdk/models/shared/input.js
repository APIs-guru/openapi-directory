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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputParallelism } from "./inputparallelism";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
import { SourceSchema } from "./sourceschema";
import { KinesisFirehoseInput } from "./kinesisfirehoseinput";
import { KinesisStreamsInput } from "./kinesisstreamsinput";
// Input
/**
 * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
**/
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputParallelism" }),
        __metadata("design:type", InputParallelism)
    ], Input.prototype, "inputParallelism", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputProcessingConfiguration" }),
        __metadata("design:type", InputProcessingConfiguration)
    ], Input.prototype, "inputProcessingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputSchema" }),
        __metadata("design:type", SourceSchema)
    ], Input.prototype, "inputSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KinesisFirehoseInput" }),
        __metadata("design:type", KinesisFirehoseInput)
    ], Input.prototype, "kinesisFirehoseInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KinesisStreamsInput" }),
        __metadata("design:type", KinesisStreamsInput)
    ], Input.prototype, "kinesisStreamsInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NamePrefix" }),
        __metadata("design:type", String)
    ], Input.prototype, "namePrefix", void 0);
    return Input;
}(SpeakeasyBase));
export { Input };
