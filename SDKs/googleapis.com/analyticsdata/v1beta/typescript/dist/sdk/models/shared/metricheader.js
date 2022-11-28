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
export var MetricHeaderTypeEnum;
(function (MetricHeaderTypeEnum) {
    MetricHeaderTypeEnum["MetricTypeUnspecified"] = "METRIC_TYPE_UNSPECIFIED";
    MetricHeaderTypeEnum["TypeInteger"] = "TYPE_INTEGER";
    MetricHeaderTypeEnum["TypeFloat"] = "TYPE_FLOAT";
    MetricHeaderTypeEnum["TypeSeconds"] = "TYPE_SECONDS";
    MetricHeaderTypeEnum["TypeMilliseconds"] = "TYPE_MILLISECONDS";
    MetricHeaderTypeEnum["TypeMinutes"] = "TYPE_MINUTES";
    MetricHeaderTypeEnum["TypeHours"] = "TYPE_HOURS";
    MetricHeaderTypeEnum["TypeStandard"] = "TYPE_STANDARD";
    MetricHeaderTypeEnum["TypeCurrency"] = "TYPE_CURRENCY";
    MetricHeaderTypeEnum["TypeFeet"] = "TYPE_FEET";
    MetricHeaderTypeEnum["TypeMiles"] = "TYPE_MILES";
    MetricHeaderTypeEnum["TypeMeters"] = "TYPE_METERS";
    MetricHeaderTypeEnum["TypeKilometers"] = "TYPE_KILOMETERS";
})(MetricHeaderTypeEnum || (MetricHeaderTypeEnum = {}));
// MetricHeader
/**
 * Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
**/
var MetricHeader = /** @class */ (function (_super) {
    __extends(MetricHeader, _super);
    function MetricHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MetricHeader.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MetricHeader.prototype, "type", void 0);
    return MetricHeader;
}(SpeakeasyBase));
export { MetricHeader };
